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