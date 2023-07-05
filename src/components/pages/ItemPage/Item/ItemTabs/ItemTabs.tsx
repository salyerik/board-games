import { FC, useState } from 'react';
import cn from 'classnames';

import { ICardProduct } from '../../../../../types/common-type';
import Questions from '../../../../UI/Questions';

import s from './ItemTabs.module.sass';

const ItemTabs: FC<{ item: ICardProduct }> = ({ item }) => {
	const tabTitle = ['Description', 'Features', 'Rules', 'Q&A'];
	const [activeTab, setActiveTab] = useState(3);

	function handleTitleClick(i: number) {
		setActiveTab(i);
	}

	return (
		<>
			<div className={s.titles}>
				{tabTitle.map((t, i) => (
					<div
						key={i}
						className={cn(s.title, { [s.title_active]: i === activeTab })}
						onClick={() => handleTitleClick(i)}>
						{t}
					</div>
				))}
			</div>
			<div className={s.content}>
				{activeTab === 0 && JSON.stringify(item, null, 2)}
				{activeTab === 1 && (
					<>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						voluptate numquam molestiae repellat! Quibusdam corrupti dignissimos
						illo aperiam officia, modi in perferendis? Cum, incidunt eveniet.
						Aut similique ex explicabo nemo aspernatur autem ipsam natus, at
						deleniti, tempore qui error, quis placeat magni neque ea sunt nobis
						sint? Voluptas amet explicabo ducimus eos officia, dolores quam
						blanditiis iusto! Molestiae mollitia voluptatibus delectus dolorem
						ipsam iusto iure aut reiciendis autem. Ipsa modi voluptates rerum,
						ratione exercitationem voluptate facilis, numquam, dicta non hic
						deleniti sit nobis dolor saepe distinctio fuga quae et similique
						quos doloremque aut voluptas dolorem repellat? Ullam, explicabo
						natus! Quis! Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quasi voluptate numquam molestiae repellat! Quibusdam corrupti
						dignissimos illo aperiam officia, modi in perferendis? Cum, incidunt
						eveniet. Aut similique ex explicabo nemo aspernatur autem ipsam
						natus, at deleniti, tempore qui error, quis placeat magni neque ea
						sunt nobis sint? Voluptas amet explicabo ducimus eos officia,
						dolores quam blanditiis iusto! Molestiae mollitia voluptatibus
						delectus dolorem ipsam iusto iure aut reiciendis autem. Ipsa modi
						voluptates rerum, ratione exercitationem voluptate facilis, numquam,
						dicta non hic deleniti sit nobis dolor saepe distinctio fuga quae et
						similique quos doloremque aut voluptas dolorem repellat? Ullam,
						explicabo natus! Quis! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quasi voluptate numquam molestiae repellat!
						Quibusdam corrupti dignissimos illo aperiam officia, modi in
						perferendis? Cum, incidunt eveniet. Aut similique ex explicabo nemo
						aspernatur autem ipsam natus, at deleniti, tempore qui error, quis
						placeat magni neque ea sunt nobis sint? Voluptas amet explicabo
						ducimus eos officia, dolores quam blanditiis iusto! Molestiae
						mollitia voluptatibus delectus dolorem ipsam iusto iure aut
						reiciendis autem. Ipsa modi voluptates rerum, ratione exercitationem
						voluptate facilis, numquam, dicta non hic deleniti sit nobis dolor
						saepe distinctio fuga quae et similique quos doloremque aut voluptas
						dolorem repellat? Ullam, explicabo natus! Quis!
					</>
				)}
				{activeTab === 2 && (
					<>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
							rem deserunt non fugiat doloribus amet accusamus est asperiores
							explicabo repudiandae consequuntur dicta architecto nihil odio
							tempora, facilis velit voluptates animi, quisquam, quasi expedita
							in! Nihil omnis sapiente laborum, ipsa fuga eveniet, enim
							molestias totam neque, deserunt error. Voluptatem veniam aliquid
							fuga saepe molestiae quae magni voluptas sit esse sed, qui, in
							deleniti aspernatur pariatur doloribus quidem? Ipsum magni
							adipisci molestiae hic laborum ratione doloremque eaque
							consequatur qui, error aspernatur nulla veritatis quia at animi
							minus velit iste. Totam saepe ut molestiae harum possimus itaque,
							eaque libero nihil praesentium, ex mollitia?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
							rem deserunt non fugiat doloribus amet accusamus est asperiores
							explicabo repudiandae consequuntur dicta architecto nihil odio
							tempora, facilis velit voluptates animi, quisquam, quasi expedita
							in! Nihil omnis sapiente laborum, ipsa fuga eveniet, enim
							molestias totam neque, deserunt error. Voluptatem veniam aliquid
							fuga saepe molestiae quae magni voluptas sit esse sed, qui, in
							deleniti aspernatur pariatur doloribus quidem? Ipsum magni
							adipisci molestiae hic laborum ratione doloremque eaque
							consequatur qui, error aspernatur nulla veritatis quia at animi
							minus velit iste. Totam saepe ut molestiae harum possimus itaque,
							eaque libero nihil praesentium, ex mollitia?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
							rem deserunt non fugiat doloribus amet accusamus est asperiores
							explicabo repudiandae consequuntur dicta architecto nihil odio
							tempora, facilis velit voluptates animi, quisquam, quasi expedita
							in! Nihil omnis sapiente laborum, ipsa fuga eveniet, enim
							molestias totam neque, deserunt error. Voluptatem veniam aliquid
							fuga saepe molestiae quae magni voluptas sit esse sed, qui, in
							deleniti aspernatur pariatur doloribus quidem? Ipsum magni
							adipisci molestiae hic laborum ratione doloremque eaque
							consequatur qui, error aspernatur nulla veritatis quia at animi
							minus velit iste. Totam saepe ut molestiae harum possimus itaque,
							eaque libero nihil praesentium, ex mollitia?
						</p>
					</>
				)}
				{activeTab === 3 && (
					<>
						<Questions />
					</>
				)}
			</div>
		</>
	);
};

export default ItemTabs;
