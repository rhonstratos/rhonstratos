import "../css/tailwind.build.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

const Header = () => {
	const x = useMotionValue(200)
	const y = useMotionValue(200)
	const constraint = 500
	const rotateX = useTransform(y, [-200, constraint], [45, -45])
	const rotateY = useTransform(x, [0, constraint], [-45, 45])

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - rect.left);
		y.set(event.clientY - rect.top);
	}
	return (
		<motion.div
			className="bg-[transparent] "
			style={{
				width: 500,
				height: 300,
				display: "flex",
				placeItems: "center",
				placeContent: "center",
				perspective: 400
			}}
			onMouseMove={handleMouse}
		>
			<motion.div
				className="bg-[transparent] w-full overflow-visible"
				style={{
					borderRadius: 30,
					rotateX: rotateX,
					rotateY: rotateY
				}}
			>
				<h1
					className="overflow-visible font-['MighaRegular'] text-[red] text-[150px] w-full h-full">
					Vreiln
				</h1>
			</motion.div>
		</motion.div>
	);
}

const Body = () => {
	return (
		<div>
			<TypeWriterEffect
				className
				textStyle={{
					fontFamily: '"Lato",sans-serif',
					color: "white",
					fontWeight: 500,
					fontSize: "1.5em",
					backgroundColor: "black",
					paddingLeft: "50px"
				}}
				startDelay={2000}
				cursorColor="#3F3D56"
				multiText={[
					"Hey there, This is a type writer animation package",
					"it consist of two types...",
					"Single text display and multi text display",
					"Fonts can be customized.",
					"The type speed can be customized as well",
					"Hyped af",
				]}
				multiTextDelay={1000}
				typeSpeed={30}
			/>
		</div>
	);
}

const App = () => {
	return (
		<div className="App text-center bg-[white] dark:bg-[black] mt-[5rem]">
			<div
				className="text-center align-middle justify-center 
				justify-items-center justify-self-center flex
				bg-[black]">
				<Header></Header>
			</div>
			<Body></Body>
		</div>
	);
};
export default App;

