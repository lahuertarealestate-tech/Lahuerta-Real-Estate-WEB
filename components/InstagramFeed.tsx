
import React, { useState } from 'react';
import { Heart, Ellipsis, Grid3X3, Film, UserSquare2 } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const posts = [
    { id: 1, title: "Casa Can Astrava Nova - El Viso", likes: 154, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop" },
    { id: 2, title: "Interior Salón Lujo", likes: 210, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop" },
    { id: 3, title: "The Wave - La Finca", likes: 189, img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=500&fit=crop" },
    { id: 4, title: "Ático Retiro Jerónimos", likes: 245, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=500&fit=crop" },
    { id: 5, title: "Detalle Textura Lujo", likes: 167, img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=500&h=500&fit=crop" },
    { id: 6, title: "Can Louis Ibiza", likes: 312, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&h=500&fit=crop" },
    { id: 7, title: "Villa Minimalista Chamberí", likes: 198, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=500&fit=crop" },
    { id: 8, title: "Loft Industrial Justicia", likes: 134, img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=500&h=500&fit=crop" },
    { id: 9, title: "Madrid Lifestyle", likes: 276, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=500&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 flex justify-center selection:bg-gray-200">
      <style>{`
        :root {
            --bg-color: #fafafa;
            --text-color: #262626;
            --link-color: #00376b;
            --border-color: #dbdbdb;
            --secondary-text: #8e8e8e;
        }

        .profile-header {
            display: flex;
            margin-bottom: 44px;
        }

        .profile-image {
            flex: 0 0 30%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-right: 30px;
        }

        .profile-avatar-logo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: #1a1a1a;
            color: #ffffff;
            border: 1px solid var(--border-color);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'League Spartan', sans-serif;
            font-size: 28px;
            letter-spacing: 1px;
            overflow: hidden;
        }

        .profile-info {
            flex: 1;
        }

        .profile-user-settings {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .profile-user-name {
            font-size: 28px;
            font-weight: 300;
            margin-right: 20px;
            letter-spacing: 1px;
            color: var(--text-color);
            font-family: 'League Spartan', sans-serif;
        }

        .profile-edit-btn {
            background-color: transparent;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-color);
            cursor: pointer;
            font-weight: 600;
            padding: 5px 12px;
            text-align: center;
            font-size: 14px;
            margin-right: 10px;
            transition: background-color 0.2s;
            font-family: 'League Spartan', sans-serif;
        }
        
        .profile-edit-btn:hover {
            background-color: rgba(0,0,0,0.05);
        }

        .profile-settings-btn {
            cursor: pointer;
            margin-left: 10px;
            color: var(--text-color);
        }

        .profile-stats {
            display: flex;
            margin-bottom: 20px;
            list-style: none;
            padding: 0;
            font-family: 'League Spartan', sans-serif;
        }

        .profile-stats li {
            font-size: 16px;
            margin-right: 40px;
            color: var(--text-color);
        }

        .profile-stat-count {
            font-weight: 600;
        }

        .profile-bio {
            font-size: 16px;
            line-height: 1.6;
            color: var(--text-color);
            font-family: 'League Spartan', sans-serif;
        }

        .profile-real-name {
            font-weight: 700;
        }

        .profile-bio a {
            color: var(--link-color);
            text-decoration: none;
            font-weight: 600;
        }

        .gallery-nav {
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            font-family: 'League Spartan', sans-serif;
        }

        .gallery-nav-item {
            color: var(--secondary-text);
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-right: 60px;
            padding: 15px 0;
            text-transform: uppercase;
            display: flex;
            align-items: center;
        }

        .gallery-nav-item.active {
            color: var(--text-color);
            border-top: 1px solid var(--text-color);
            margin-top: -1px;
        }
        
        .gallery-nav-item i {
            margin-right: 6px;
            font-size: 14px;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            padding-bottom: 30px;
        }

        .gallery-item {
            position: relative;
            width: 100%;
            padding-bottom: 100%;
            overflow: hidden;
            background-color: #efefef;
        }

        .gallery-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
            transform: scale(1.05);
        }

        .gallery-item-info {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-family: 'League Spartan', sans-serif;
        }

        .gallery-item:hover .gallery-item-info {
            opacity: 1;
        }

        .gallery-item-info ul {
            display: flex;
            list-style: none;
            padding: 0;
        }

        .gallery-item-info li {
            font-size: 16px;
            font-weight: 600;
            margin: 0 15px;
            display: flex;
            align-items: center;
        }

        @media (max-width: 768px) {
            .profile-header { flex-direction: column; margin-bottom: 20px; }
            .profile-image { padding-right: 0; margin-bottom: 20px; justify-content: flex-start; }
            .profile-avatar-logo { width: 80px; height: 80px; font-size: 16px; }
            .profile-user-name { font-size: 24px; margin-bottom: 10px; width: 100%; }
            .profile-stats { justify-content: space-around; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); padding: 10px 0; }
            .profile-stats li { margin-right: 0; text-align: center; display: flex; flex-direction: column; }
            .gallery { gap: 3px; }
            .gallery-nav-item { margin-right: 30px; }
        }
      `}</style>

      <div className="max-w-[935px] w-full px-5">
        <header className="profile-header">
          <div className="profile-image">
            <div className="profile-avatar-logo">lahuerta</div>
          </div>

          <div className="profile-info">
            <div className="profile-user-settings">
              <h1 className="profile-user-name">lahuertarealestate</h1>
              <button className="profile-edit-btn">Seguir</button>
              <button className="profile-edit-btn">Mensaje</button>
              <Ellipsis className="profile-settings-btn" size={24} />
            </div>

            <ul className="profile-stats">
              <li><span className="profile-stat-count">48</span> posts</li>
              <li><span className="profile-stat-count">2.1k</span> followers</li>
              <li><span className="profile-stat-count">315</span> following</li>
            </ul>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Lahuerta Real Estate</span><br />
                ▪ Propiedades Exclusivas & Arquitectura<br />
                ▪ Madrid | Baleares<br />
                ▪ Descubre el lugar donde realmente perteneces.<br />
                <a href="https://lahuertarealstate.vercel.app" target="_blank" rel="noreferrer">lahuertarealstate.vercel.app</a>
              </p>
            </div>
          </div>
        </header>

        <div className="gallery-nav">
          <div className="gallery-nav-item active">
            <Grid3X3 size={14} className="mr-1.5" /> Publicaciones
          </div>
          <div className="gallery-nav-item">
            <Film size={14} className="mr-1.5" /> Reels
          </div>
          <div className="gallery-nav-item">
            <UserSquare2 size={14} className="mr-1.5" /> Etiquetadas
          </div>
        </div>

        <div className="gallery">
          {posts.map((post) => (
            <div key={post.id} className="gallery-item group cursor-pointer" tabIndex={0}>
              <img src={post.img} alt={post.title} />
              <div className="gallery-item-info">
                <ul>
                  <li><Heart size={20} fill="white" className="mr-2" /> {post.likes}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
