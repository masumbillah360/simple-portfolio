import dynamic from 'next/dynamic';

const AnimationLottieNoSSR = dynamic(() => import('./animation-lottie'), {
    ssr: false,
});

export default AnimationLottieNoSSR;
