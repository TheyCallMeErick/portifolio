import './header.module.css';
export default function Header() {
	return (
		<header>
			<h1>Erick Azevedo</h1>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Projetos</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
