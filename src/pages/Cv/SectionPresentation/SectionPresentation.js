import React from 'react'
import responsiv from "../../../assets/responsive.png"
import "./SectionPresentation.css"

const SectionPresentation = () => {
  return (
    <section id="slider">
			<div className="conteneur flex-slider">
				<figure id="milieu-haut-gauche">
					<a href="/">
						<img src={responsiv} alt=" qui represente plusieurs écrans pour le responsive" title="Responsive design" />
					</a>
					<figcaption>
						<a href="/">Mise en avant du dernier projet</a>
					</figcaption>
				</figure>
				<div id="milieu-haut-droit">
					<h2>Vous êtes à la recherche d'un développeur pour gérer vos projets web ?</h2>
					<p>Je peux renforcer votre équipe autant sur la partie graphique que développement.</p>
					<p>Seriez-vous prêt à me donner ma chance?</p>
				</div>
			</div>
		</section>
  )
}

export default SectionPresentation