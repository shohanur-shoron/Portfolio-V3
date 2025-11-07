import FlowingMenu from "./ui/FlowingMenu.tsx";
import ScrollFloat from './ui/ScrollFloat';
import schoolImage from '../assets/school.jpg';
import collageImage from '../assets/collage.jpg';
import universityImage from '../assets/university.jpg';

export default function Education() {
    const demoItems = [
        { link: '#', text: '2018 - 2020', text2: 'Chandai High School - Natore', image: schoolImage },
        { link: '#', text: '2020 - 2021', text2: 'Police Line School & Collage - Rajshahi', image: collageImage },
        { link: '#', text: '2021 - 2025', text2: 'University of Asis Pacific - Dhaka', image: universityImage },
    ];

    return (<>
        <ScrollFloat
            animationDuration={0.7}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.04}
        >
            Education
        </ScrollFloat>

        <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
        </div>
    </>)
}