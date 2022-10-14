import { LazyMotion, domAnimation, m } from "framer-motion";

export const AnimationParentContainer = ({
  children,
  className,
  direction = "x",
  amount = 0.2,
  once = true,
  staggerChildren = 0.3,
  stagDirection = 1,
  delay = 0,
  delayStagger = 0.3,
  duration = 0.7,
}) => {
  const parentX = {
    onscreen: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerChildren,
        staggerDirection: stagDirection,
        delay: delay,
        duration: duration,
      },
    },
    offscreen: {
      x: 0,
    },
  };
  const parentY = {
    onscreen: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: staggerChildren,
        staggerDirection: stagDirection,
        delay: delay,
        duration: duration,
      },
    },
    offscreen: {
      y: -12,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial="offscreen"
        whileInView="onscreen"
        variants={direction === "x" ? parentX : parentY}
        viewport={{ once: once, amount: amount }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export const AnimationChildContainer = ({
  children,
  className,
  variant = "vertical",
  offsetX = -1000,
  offsetY = 70,
  delay = 0,
  duration = 0.4,
}) => {
  const vertical = {
    offscreen: {
      y: offsetY,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };

  const horizontal = {
    offscreen: {
      x: offsetX,
    },
    onscreen: {
      x: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        variants={variant === "vertical" ? vertical : horizontal}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export const AnimationContainer = ({
  children,
  className,
  delay = 0,
  amount = 0.2,
  once = true,
  duration = 0.7,
  variant = "vertical",
  id,
}) => {
  const vertical = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };

  const horizontal = {
    offscreen: {
      x: -1000,
    },
    onscreen: {
      x: 0,

      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id={id}
        className={className}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: once, amount: amount }}
        variants={variant === "vertical" ? vertical : horizontal}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
