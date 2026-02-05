import { motion } from 'motion/react';

interface LoadingAnimationProps {
  fullScreen?: boolean;
  message?: string;
  type?: 'animated-cards' | 'progress-bar' | 'circular-spinner';
}

export function LoadingAnimation({ fullScreen = false, message = 'Loading...', type = 'animated-cards' }: LoadingAnimationProps) {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    initial: { y: 0, opacity: 0.6 },
    animate: {
      y: [-10, 10, -10],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        times: [0, 0.5, 1],
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        times: [0, 0.5, 1],
      },
    },
  };

  // Progress bar animation
  if (type === 'progress-bar' && fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 relative w-80"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated progress bar */}
            <div className="w-full">
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"
                  animate={{
                    width: ['0%', '100%'],
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xs text-gray-500 font-medium"
                >
                  Loading...
                </motion.div>
              </div>
            </div>

            {/* Optional message */}
            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-600 text-center"
              >
                {message}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === 'progress-bar') {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-xs">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"
              animate={{
                width: ['0%', '100%'],
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs text-gray-500 text-center font-medium"
          >
            Loading...
          </motion.p>
        </div>
      </div>
    );
  }

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-12 relative"
        >
          {/* Background animated circles */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated building icon with property cards */}
            <div className="flex gap-3 justify-center">
              <motion.div
                variants={dotVariants}
                initial="initial"
                animate="animate"
                className="w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg shadow-lg"
              />
              <motion.div
                variants={dotVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: 0.1,
                }}
                className="w-8 h-12 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg shadow-lg"
              />
              <motion.div
                variants={dotVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: 0.2,
                }}
                className="w-8 h-12 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg shadow-lg"
              />
            </div>

            {/* Animated dots */}
            <motion.div variants={containerVariants} initial="initial" animate="animate" className="flex gap-2">
              <motion.span
                variants={dotVariants}
                className="w-3 h-3 bg-blue-600 rounded-full"
              />
              <motion.span
                variants={dotVariants}
                className="w-3 h-3 bg-blue-600 rounded-full"
              />
              <motion.span
                variants={dotVariants}
                className="w-3 h-3 bg-blue-600 rounded-full"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{message}</h3>
              <p className="text-sm text-gray-500">Please wait while we fetch the details...</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Animated property cards */}
      <div className="flex gap-3 justify-center mb-8">
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          className="w-6 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded shadow-lg"
        />
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: 0.1,
          }}
          className="w-6 h-10 bg-gradient-to-b from-blue-400 to-blue-500 rounded shadow-lg"
        />
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: 0.2,
          }}
          className="w-6 h-10 bg-gradient-to-b from-blue-300 to-blue-400 rounded shadow-lg"
        />
      </div>

      {/* Animated dots */}
      <motion.div variants={containerVariants} initial="initial" animate="animate" className="flex gap-2">
        <motion.span
          variants={dotVariants}
          className="w-2 h-2 bg-blue-600 rounded-full"
        />
        <motion.span
          variants={dotVariants}
          className="w-2 h-2 bg-blue-600 rounded-full"
        />
        <motion.span
          variants={dotVariants}
          className="w-2 h-2 bg-blue-600 rounded-full"
        />
      </motion.div>

      {/* Optional message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 font-medium"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}

// Circular spinner component for inline use (e.g., in buttons)
export function CircularSpinner() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ originX: '50%', originY: '50%' }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="15.7 62.8"
        opacity="0.6"
      />
    </motion.svg>
  );
}
