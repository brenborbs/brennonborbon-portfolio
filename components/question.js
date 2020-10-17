import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Accordion as ReachAccordion,
  AccordionItem as ReachAccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion';
import '@reach/accordion/styles.css';

function Question({ children, heading, headingLevel = 'h3' }) {
  const Heading = headingLevel;
  const [isExpanded, setExpanded] = useState(false);
  return (
    <ReachAccordion collapsible onChange={() => setExpanded((prev) => !prev)}>
      <ReachAccordionItem className="px-4 py-4 mb-6 border border-green-500 rounded-md shadow-lg w-84">
        <Heading className="flex items-center">
          {heading}
          <AccordionButton className="flex items-center self-center justify-center w-5 h-5 ml-2 text-green-700 bg-transparent bg-green-300 border border-transparent rounded-md">
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              className="inline-block"
            >
              +
            </motion.span>
          </AccordionButton>
        </Heading>
        <AccordionPanel className="focus:outline-none focus:shadow-outline">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                className="mt-4 overflow-y-hidden"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </AccordionPanel>
      </ReachAccordionItem>
    </ReachAccordion>
  );
}

export { Question };
