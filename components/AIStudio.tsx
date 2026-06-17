
import React, { useState, useRef } from 'react';
import { Upload, Loader2, ArrowRight } from 'lucide-react';
import { generateImage, editImage, generateVideo, fileToBase64, analyzeImage } from '../services/geminiService';
import { AIState } from '../types';

const AIStudio: React.FC = () => {
  const [mode, setMode] = useState<'generate' | 'edit' | 'video' | 'analyze'>('generate');
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<AIState>(AIState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResultUrl(null); 
      setAnalysisResult('');
    }
  };

  const handleAction = async () => {
    if (!prompt && mode !== 'analyze') return;
    if ((mode === 'edit' || mode === 'analyze') && !selectedFile) return;

    setStatus(AIState.LOADING);
    setAnalysisResult('');
    
    try {
      let result = '';
      if (mode === 'generate') {
        result = await generateImage(prompt, '16:9');
        setResultUrl(result);
      } else if (mode === 'edit' && selectedFile) {
        const base64Full = await fileToBase64(selectedFile);
        const base64Data = base64Full.split(',')[1];
        result = await editImage(base64Data, prompt);
        setResultUrl(result);
      } else if (mode === 'video') {
        let imageBytes = undefined;
        if (selectedFile) {
           const base64Full = await fileToBase64(selectedFile);
           imageBytes = base64Full.split(',')[1];
        }
        result = await generateVideo(prompt, '16:9', imageBytes);
        setResultUrl(result);
      } else if (mode === 'analyze' && selectedFile) {
        const base64Full = await fileToBase64(selectedFile);
        const base64Data = base64Full.split(',')[1];
        const analysis = await analyzeImage(base64Data, prompt || "Analiza esta propiedad.");
        setAnalysisResult(analysis);
      }
      setStatus(AIState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(AIState.ERROR);
    }
  };

  return (
    <section id="estudio-ia" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-6xl mx-auto">
          
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-50">
            {['generate', 'edit', 'video', 'analyze'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                    setMode(tab as any);
                    setResultUrl(null);
                    setAnalysisResult('');
                    setPreviewUrl(null);
                    setSelectedFile(null);
                    setPrompt('');
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all border ${
                  mode === tab ? 'bg-navy-900 border-navy-900' : 'bg-transparent border-gray-200 hover:border-navy-900'
                }`}
                title={tab}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              
              {(mode !== 'generate') && (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative h-32 rounded-lg bg-stone-50 border border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-sand-400 transition-all duration-300"
                >
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Upload size={16} className="text-gray-300" />
                  )}
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                </div>
              )}

              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-stone-50 border border-transparent rounded-lg p-4 text-navy-900 text-sm placeholder:text-gray-300 focus:outline-none focus:bg-white focus:border-stone-200 resize-none transition-all"
                  rows={2}
                  placeholder="..."
                />
              </div>

              <button
                onClick={handleAction}
                disabled={status === AIState.LOADING || (mode !== 'generate' && !selectedFile)}
                className="w-full bg-navy-900 text-white rounded-lg p-4 flex justify-center items-center hover:bg-navy-800 disabled:opacity-50 transition-all group"
              >
                {status === AIState.LOADING ? (
                  <Loader2 className="animate-spin" size={16}/>
                ) : (
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                )}
              </button>
            </div>

            <div className="lg:col-span-8 bg-stone-50 rounded-xl h-[400px] border border-gray-50 relative flex items-center justify-center overflow-hidden">
              {!resultUrl && !analysisResult && status === AIState.IDLE && (
                <div className="w-full h-full border border-gray-100/50 rounded-xl"></div>
              )}

              {status === AIState.LOADING && (
                <div className="w-6 h-6 border-2 border-stone-200 border-t-navy-900 rounded-full animate-spin"></div>
              )}
              
              {status === AIState.SUCCESS && resultUrl && mode !== 'analyze' && (
                mode === 'video' ? (
                   <video src={resultUrl} controls autoPlay loop className="w-full h-full object-cover rounded-xl" />
                ) : (
                   <img src={resultUrl} alt="Resultado" className="w-full h-full object-cover rounded-xl animate-fade-in" />
                )
              )}

              {status === AIState.SUCCESS && mode === 'analyze' && (
                <div className="p-8 w-full h-full overflow-y-auto">
                  <div className="prose prose-sm text-gray-500 font-light leading-relaxed">
                      {analysisResult}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudio;
