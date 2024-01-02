import React from 'react';
import caprica from '@/imgs/caprica.png'
import roslin from '@/imgs/laura_roslin.jpg'

const Home = () => {
    return (
        <div>
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <img src={ caprica }
      className="mb-6 w-1/3 rounded-lg shadow-lg dark:shadow-black/20" alt="Logo de Caprica" />

    <div className="mb-6 flex items-center">
      <img src={ roslin } className="mr-2 h-8 rounded-full" alt="avatar"
        loading="lazy" />
      <div>
        <span>Publier par la présidente </span>
        <a href="https://galactica.fandom.com/fr/wiki/Laura_Roslin" className="font-medium">Laura Roslin</a>
      </div>
    </div>

    <h1 className="mb-6 text-3xl font-bold">
      Base de données militaire de l'amirauté des 12 colonies de Kobol
    </h1>

    <p>
      Bienvenue sur la base de données des vaisseaux militaire de la flotte spatiale des 12 colonies de Kobol, cette archive est strictement reservée au personnel autorisé. Vous y trouverez les vaisseaux en service ainsi que les vaisseaux à la retraite ou détruits au combat.
    </p>
    <p className='mt-20'>
      ©Moinet Jérémy 2023/2024
    </p>
  </section>
</div>
        </div>
    );
};

export default Home;