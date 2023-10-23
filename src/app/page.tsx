import {TestimoniaSection} from './components/testimonial/Testimonial';
import {getEntry} from '@/lib/server/contentful';
import {ContentBlock} from './components/contentBlock/ContentBlock';
import {IPageFields} from '@/types/generated/contentful';

export default async function Home() {
	const page: IPageFields = (await getEntry('UjwDzja6SYzExwH780KlV')).fields;

	return (
		<main>
			{page?.sections?.map((section, idx) => (
				<ContentBlock key={idx} {...section} />
			))}

	

			<section>
				<TestimoniaSection>
					{Array(3)
						.fill('')
						.map((item, index) => (
							<TestimoniaSection.Testimonial
								key={index}
								author='Paul Starr'
								description='	Lorem ipsum dolor sit, amet consectetur
				adipisicing elit. Culpa sit rerum incidunt, a
				consequuntur recusandae ab saepe illo est quia
				obcaecati neque quibusdam eius accusamus error
				officiis atque voluptates magnam!'
								link='/'
								imgUrl=''
							/>
						))}
				</TestimoniaSection>
			</section>
		</main>
	);
}
