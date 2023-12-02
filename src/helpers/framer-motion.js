import React from 'react';
import { motion } from 'framer-motion';

export const FramerMotion = ({ children, $variant }) => {
  const getAnimationVariant = () => {
    switch ($variant) {
      case 'header':
        return {
          initial: { y: '-100%' },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 100, damping: 20 },
        };

      case 'operationForm':
        return {
          initial: { x: '100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'mainTransactionsInfoDesktop':
        return {
          initial: { x: '-100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'mainTransactionsHeaderNotDesktop':
        return {
          initial: { x: '100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'mainTransactionsListNotDesktop':
        return {
          initial: { x: '-100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'doughnut':
        return {
          initial: { x: '-100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'allExpensesList':
        return {
          initial: { y: '100%' },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'allIncomesList':
        return {
          initial: { y: '100%' },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };

      case 'modal':
        return {
          initial: { y: '100%' },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 15 },
        };

      case 'categoryForm':
        return {
          initial: { y: '100%' },
          animate: { y: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 60 },
        };

      default:
        return {
          initial: { x: '100%' },
          animate: { x: 0 },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        };
    }
  };

  const animationVariant = getAnimationVariant();

  return <motion.div {...animationVariant}>{children}</motion.div>;
};
