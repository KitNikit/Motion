import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		const animItems = document.querySelectorAll('.anim');
		if (animItems.length > 0) {
			window.addEventListener('scroll', animOnScroll);
			function animOnScroll() {
				for (let index = 0; index < animItems.length; index++) {
					const animItem = animItems[index];
					const animItemHeight = animItem.offsetHeight;
					const animItemOffset = offset(animItem).top;
					const animStart = 1;
					let animItemPoint = window.innerHeight - animItemHeight / animStart;
					if (animItemHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animStart;
					}
					if (
						pageYOffset > animItemOffset - animItemPoint &&
						pageYOffset < animItemOffset + animItemHeight
					) {
						animItem.classList.add('_active');
					} else {
						if (!animItem.classList.contains('no-hide')) {
							animItem.classList.remove('_active');
						}
					}
				}
			}

			function offset(e1) {
				const rect = e1.getBoundingClientRect(),
					scrollLeft =
						window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
			}
			setTimeout(() => {
				animOnScroll();
			}, 300);
		}
	}, []);
	return (
		<>
			<div className='bg'>
				<div className='title'>
					<center>
						<div>Motion</div>
						<div>The domestic dog</div>
					</center>
				</div>
				<div className='container'>
					<p>
						The dog derived from an ancient, extinct wolf, and the modern grey
						wolf is the dog&aposs nearest living relative. The dog was the first
						species to be domesticated, by hunter–gatherers over 15,000 years
						ago, before the development of agriculture. Their long association
						with humans has led dogs to be uniquely adapted to human behavior,
						leading to a large number of domestic individuals and the ability to
						thrive on a starch-rich diet that would be inadequate for other
						canids. The dog has been selectively bred over millennia for various
						behaviors, sensory capabilities, and physical attributes. Dog breeds
						vary widely in shape, size, and color. They perform many roles for
						humans, such as hunting, herding, pulling loads, protection,
						assisting police and the military, companionship, therapy, and
						aiding disabled people. This influence on human society has given
						them the sobriquet of &quotman&aposs best friend.&quot
					</p>
					<p>
						The Cretaceous–Paleogene extinction event occurred 65 million years
						ago and brought an end to the dinosaurs and the appearance of the
						first carnivorans. The name carnivoran is given to a member of the
						order Carnivora. Carnivorans possess a common arrangement of teeth
						called carnassials, in which the first lower molar and the last
						upper premolar possess blade-like enamel crowns that act similar to
						a pair of shears for cutting meat. This dental arrangement has been
						modified by adaptation over the past 60 million years for diets
						composed of meat, for crushing vegetation, or for the loss of the
						carnassial function altogether as in seals, sea lions, and walruses.
						Today, not all carnivorans are carnivores, such as the insect-eating
						Aardwolf.
					</p>
				</div>
			</div>
			<div className='main'>
				<div className='first'>
					<center>
						<h1 className='anim'>Domestication</h1>
					</center>
					<p className='anim'>
						The generally accepted earliest dog remains were discovered in
						Bonn-Oberkassel, Germany. Contextual, isotopic, genetic, and
						morphological evidence shows that this dog was not a local wolf. The
						dog was dated to 14,223 years ago and was found buried along with a
						man and a woman, all three having been sprayed with red hematite
						powder and buried under large, thick basalt blocks. The dog had died
						of canine distemper. Earlier remains dating back to 30,000 years ago
						have been described as Paleolithic dogs but their status as dogs or
						wolves remains debated because considerable morphological diversity
						existed among wolves during the Late Pleistocene.
					</p>
					<p className='anim'>
						This timing indicates that the dog was the first species to be
						domesticated in the time of hunter–gatherers, which predates
						agriculture. DNA sequences show that all ancient and modern dogs
						share a common ancestry and descended from an ancient, extinct wolf
						population which was distinct from the modern wolf lineage. Most
						dogs form a sister group to the remains of a Late Pleistocene wolf
						found in the Kessleroch cave near Thayngen in the canton of
						Schaffhausen, Switzerland, which dates to 14,500 years ago. The most
						recent common ancestor of both is estimated to be from 32,100 years
						ago. This indicates that an extinct Late Pleistocene wolf may have
						been the ancestor of the dog, with the modern wolf being the
						dog&aposs nearest living relative.
					</p>
					<p className='anim'>
						The dog is a classic example of a domestic animal that likely
						travelled a commensal pathway into domestication. The questions of
						when and where dogs were first domesticated have taxed geneticists
						and archaeologists for decades. Genetic studies suggest a
						domestication process commencing over 25,000 years ago, in one or
						several wolf populations in either Europe, the high Arctic, or
						eastern Asia. In 2021, a literature review of the current evidence
						infers that the dog was domesticated in Siberia 23,000 years ago by
						ancient North Siberians, then later dispersed eastward into the
						Americas and westward across Eurasia.
					</p>
				</div>
				<div className='second'>
					<ul className='left'>
						<li className='anim'>White Terrier</li>
						<li className='anim'>Basset Hound</li>
						<li className='anim'>Shar Pei</li>
						<li className='anim'>Cocker Spaniel</li>
						<li className='anim'>Alaskan Malamute</li>
						<li className='anim'>Miniature Pinscher</li>
					</ul>
					<div className='dog'></div>
					<ul className='right'>
						<li className='anim'>Dalmatian</li>
						<li className='anim'>Samoyed</li>
						<li className='anim'>Greyhound</li>
						<li className='anim'>Bull Terrier</li>
						<li className='anim'>Chow-Chow</li>
						<li className='anim'>English Mastiff</li>
					</ul>
				</div>
				<div className='third'>
					<div className='items'>
						<div className='item anim'>
							<div className='image'>
								<img src='https://highlandcanine.com/wp-content/uploads/2019/08/siberian-husky.jpg'></img>
							</div>
							<div className='text'>Siberian Husky</div>
						</div>
						<div className='item anim'>
							<div className='image'>
								<img src='https://highlandcanine.com/wp-content/uploads/2019/08/golden-retriever.jpg'></img>
							</div>
							<div className='text'>Golden Retriever</div>
						</div>
						<div className='item anim'>
							<div className='image'>
								<img src='https://highlandcanine.com/wp-content/uploads/2019/08/pomeranian.jpg'></img>
							</div>
							<div className='text'>Pomeranian</div>
						</div>
						<div className='item anim'>
							<div className='image'>
								<img src='https://highlandcanine.com/wp-content/uploads/2019/08/chowchow.jpg'></img>
							</div>
							<div className='text'>Chow-Chow</div>
						</div>
						<div className='item anim'>
							<div className='image'>
								<img src='https://highlandcanine.com/wp-content/uploads/2019/08/cane-corso.jpg'></img>
							</div>
							<div className='text'>Cane Corso</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
