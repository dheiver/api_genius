import { client } from "@gradio/client";


async function run() {

	const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
	const exampleImage = await response_0.blob();
						
	const app = await client("https://dheiver-segmento-de-angio-coronariana-v2.hf.space/");
	const result = await app.predict("/predict", [
				exampleImage, 	// blob in 'Angiograma:' Image component		
				"SE-RegUNet 4GF", // string (Option from: ['SE-RegUNet 4GF', 'SE-RegUNet 16GF', 'AngioNet', 'EffUNet++ B5', 'Reg-SA-UNet++', 'UNet3+']) in 'Modelo' Dropdown component
	]);

	console.log(result?.data);
}

run();
