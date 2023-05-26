import { Link } from 'react-router-dom';
import cordage from "../../assets/cordagecasse.jpeg"
import materiel from "../../assets/balle.jpeg"
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import DevicesIcon from '@mui/icons-material/Devices';


export default function Home() {

	return (

		<main className='main-home'>

			<section className="presentation">

				<h1 className="presentation__h1"> Bienvenue sur click & raquette ! </h1>
				<h2 className="presentation__h2"> Déposez, Cliquez, Jouez ! </h2>  

			</section>

			<section className="functionning" >

				<div className="functionning__button-animate" >
					<div className="functionning__bubble"> 	1 </div>
					<SportsTennisIcon className="functionning-icon-tennis"/>
					<h3 className="functionning__h3">Déposez votre raquette dans le casier </h3>
				</div>

				<Link to="/cordez" className='functionning__link'>
				<div className="functionning__button-animate" >
						<div className="functionning__bubble"> 	2 </div>
						<DevicesIcon className="functionning-icon-computer"/>
						<h3 className="functionning__h3">Commander votre cordage en ligne</h3>
					</div>
				</Link>

				<div className="functionning__button-animate" >
					<div className="functionning__bubble"> 	3 </div>
					<SportsTennisIcon className="functionning-icon-tennis"/>
					<h3 className="functionning__h3">Récuperer votre raquette, amusez vous!</h3>
				</div>

			</section>

			<section className="servicesLinks">

				<Link className="servicesLinks__card" to='/cordez'>
					<img src={cordage} alt="raquette en train d'être cordé" className="servicesLinks__card-image"/>
					<p className="servicesLinks__card-text">  1,2,3  cordez ! </p>
				</Link>

				<Link className="servicesLinks__card" to='/cordages'>
					<img src={materiel} alt="raquette en train d'être cordé" className="servicesLinks__card-image"/>
					<p className="servicesLinks__card-text">  cordages<br/> balles<br/> accessoires </p>
				</Link>

			</section>

		</main>

	)
}

