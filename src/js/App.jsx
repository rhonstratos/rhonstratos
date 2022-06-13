import "../css/tailwind.build.css"
import { motion } from "framer-motion"
import TypeWriterEffect from 'react-typewriter-effect';
const App = () => {
	return (
		<div
			className="App text-center bg-[#fff] dark:bg-[#000] mt-[5rem]">
			<motion.h1
				animate={{ rotate: 360 }}
				transition={{ type: "spring", duration: 5, bounce: 0.6 }}
				className="text-center text-[#000] dark:text-[#fff] text-[250px] font-['Lato',sans-serif]">
				Vreiln
			</motion.h1>
			<div>
				<TypeWriterEffect
					textStyle={{
						fontFamily: '"Lato",sans-serif',
						color: '#3F3D56',
						fontWeight: 500,
						fontSize: '1.5em',
					}}
					startDelay={2000}
					cursorColor="#3F3D56"
					multiText={[
						'Hey there, This is a type writer animation package',
						'it consist of two types...',
						'Single text display and multi text display',
						'Fonts can be customized.',
						'The type speed can be customized as well',
					]}
					multiTextDelay={1000}
					typeSpeed={30}
				/>
			</div>
		</div>

	);
}
export default App;
