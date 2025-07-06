import { BriefcaseBusiness, Scroll } from 'lucide-react';
import './about.module.css'
export default function About() {
    return <main>
		<div className="hero">
			<div>
				<p>Olá <span>.</span></p>
				<p>Me chamo Erick</p>
				<p>e sou Desenvolvedor de Software</p>
			</div>

			<div>
				<button>Meu curriculo</button>
			</div>
		</div>
		<Carrousel/>
		<div>
			<div>
				<p>Desenvolvimento web</p>
				<p>Design de aplicações</p>
				<p>Desenvolvimento mobile</p>
			</div>
			<h2>Sobre mim</h2>
			<p>
				Sou um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Tenho
				experiência em diversas tecnologias e estou sempre aprendendo novas habilidades para aprimorar meu
				trabalho.
			</p>
		</div>

		<div></div>

		<div>
			<h2>Contato</h2>
		</div>
	</main>

}

function Carrousel() {
    return (
        <div className='carrousel-container'>

        <ul >
				<li>HTML5</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React</li>
				<li>Node.js</li>
				<li>Git</li>
				<li>C#</li>
				<li>Java</li>
				<li>PHP</li>
				<li>Astro</li>
			</ul>
        </div>
    );
}

function Carreer() {
    return (
        <div className='career-container'>
            <h2>Minha carreira</h2>
            <p>
                Comecei minha carreira como desenvolvedor web, criando sites e aplicações para pequenas empresas.
                Com o tempo, fui aprimorando minhas habilidades e hoje trabalho em projetos mais complexos, utilizando
                tecnologias modernas e práticas ágeis.
            </p>
        </div>
    );
}

function CarreerItem({title, description, startDate, endDate} : {title: string, description: string, startDate: string, endDate: string}) {
    return (
        <div className='career-item'>
            <BriefcaseBusiness />
            <Scroll />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{startDate} - {endDate}</p>
        </div>
    );
}