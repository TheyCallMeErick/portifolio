import './footer.module.css'
export default function Footer() {
	return <footer>
		<p>© {new Date().getUTCFullYear()} Erick Azevedo</p>
		<div>
			<a href="#">Email</a>
			<a href="#">Github</a>
			<a href="#">Linkedin</a>
		</div>
	</footer>;
}
