// icons
import MobilePng from '../assets/icons/mobile.png';
import ModelingPng from '../assets/icons/model_3d.png';
import WebPng from '../assets/icons/web_design.png';
import IllustrationPng from '../assets/icons/illustration.png';
import DrawingPng from '../assets/icons/drawing.png';
import AnimationPng from '../assets/icons/animation.png';
import EducationPng from '../assets/icons/education.png';
import NetWorkingPng from '../assets/icons/networking.png';
import CodingPng from '../assets/icons/coding.png';

// images
import Bg1Png from '../assets/images/bg_1.png';
import Bg2Png from '../assets/images/bg_2.png';
import Bg3Png from '../assets/images/bg_3.png';
import Bg4Png from '../assets/images/bg_4.png';
import Bg5Png from '../assets/images/bg_5.png';
import Bg6Png from '../assets/images/bg_6.png';

export const categories = [
    { key: 'mobile_design', label: 'Mobile Design', image: MobilePng, isSelected: false, backgroundImg: Bg1Png },
    { key: 'modeling', label: '3D Modeling', image: ModelingPng, isSelected: false, backgroundImg: Bg2Png },
    { key: 'web_design', label: 'Web Design', image: WebPng, isSelected: false, backgroundImg: Bg3Png },
    { key: 'illustrations', label: 'Illustrations', image: IllustrationPng, isSelected: false, backgroundImg: Bg4Png },
    { key: 'drawing', label: 'Drawing', image: DrawingPng, isSelected: false, backgroundImg: Bg5Png },
    { key: 'animation', label: 'Animation', image: AnimationPng, isSelected: false, backgroundImg: Bg6Png },
    { key: 'education', label: 'Education', image: EducationPng, isSelected: false, backgroundImg: Bg1Png },
    { key: 'networking', label: 'Networking', image: NetWorkingPng, isSelected: false, backgroundImg: Bg2Png },
    { key: 'coding', label: 'Coding', image: CodingPng, isSelected: false, backgroundImg: Bg3Png },
]

export type CategorieProps = {
    key: string;
    label: string;
    image: number;
    isSelected: boolean;
    backgroundImg: number;
}
