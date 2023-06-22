import React from 'react'
import profil from "../../assets/profil.png"
import "./Main.css"

const Main = () => {
  return (
    <main>
    <div className="conteneur flex-main">
        <section id="presentation">
            <h2>Présentation</h2>

            <div className="profil-flex">
                <img src={profil} title=" de Prénom Nom" alt="Prénom Nom" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit?  Quam totam corporis doloremque doloribus fugit, voluptatibus nobis repellat libero incidunt temporibus provident earum dolorem. Numquam, libero et ratione deleniti ipsa veritatis.</p>
            </div>
            
            <div className="mise-en-avant">

                <figure>
                    <h4>Design</h4>
                    <img src={profil} title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>Front-end development</h4>
                    <img src={profil} title="Catégorie : graphisme" alt="Design"/>
                    <figcaption> dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>Back-end development</h4>
                    <img src={profil}  title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit amet consectetur adipisicing elm dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

                <figure>
                    <h4>SEO</h4>
                    <img src={profil}  title="Catégorie : graphisme" alt="Design"/>
                    <figcaption>Lorem ipsum dolor, sit sum dolor, sit sum dolor, sit amet consectetur adipisicing elit.</figcaption>
                </figure>

            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis-je ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit, ipsa esse illo sunt iure voluptatum, labore laboriosam quas officiis non totam repellat natus odit corporis dicta tenetur consectetur sapiente.</p>
            </div>
            <div className="encart">
                <h3>Experience</h3>
                <ul>
                    <li>Experience 1</li>
                    <li>Experience 2</li>
                    <li>Experience 3</li>
                </ul>
            </div>
            <div className="encart">
                <h3>Contact</h3>
                <form action="traitement.js" method="post">
                    
                    <label for="prenom">Prenom</label> 
                    <input placeholder="Prénom" type="text" id="prenom" name="prenom" />

                     <label for="nom">Nom</label> 
                    <input  placeholder="Nom" type="text" id="nom" name="nom" />

                 <label for="email">E-mail</label> 
                    <input  placeholder="E-mail" type="email" id="email" name="email" />

                 <label for="message">Message</label> 
                    <textarea placeholder="Ecrire votre message" name="message" id="message"></textarea>
                    
                    <input type="submit" />
                </form>
            </div>
        </aside>
    </div>
</main>
  )
}

export default Main