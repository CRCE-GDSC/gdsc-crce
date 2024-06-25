"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundGradient } from './ui/background-gradient';
import AnimatedGradientText from './ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { Dock, DockIcon } from './ui/dock';
import { getTeam2024Data } from '@/data/Teamdata';

export default function TeamView(props) {
  const [selectedMember, setSelectedMember] = useState(1);
  const [isSeniorVisible, setIsSeniorVisible] = useState(false);
  const [selectedPositionIndex, setSelectedPositionIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [positions, setPositions] = useState(["Tech Associates", "GDSC Associates", "Graphic Associates"]);
  const [teamData, setTeamData] = useState<number[][]>([]);
  const [positionWithKey, setPositionWithKey] = useState({});

  const handleToggle = () => {
    setIsSeniorVisible(!isSeniorVisible);

  };

  const handleChevronClick = (newDirection) => {
    setDirection(newDirection);
    setSelectedPositionIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % positions.length;
      } else {
        return (prevIndex - 1 + positions.length) % positions.length;
      }
    });
  };

  useEffect(() => {
    if (props.type === "Team2024") {
      setTeamData(getTeam2024Data(isSeniorVisible));
    }
  }, [props.type, isSeniorVisible]);

  useEffect(() => {
    setTeamData(getTeam2024Data(isSeniorVisible));
    if (isSeniorVisible) {
      setPositions(["Management Team", "Core Team", "Advisors"]);
    } else {
      setPositions(["Tech Associates", "GDSC Associates", "Graphic Associates"]);
    }
  }, [isSeniorVisible]);

  return (
    <div className="flex flex-col flex-1 items-center justify-between gap-8">
      <div className='mt-2 flex gap-4 justify-center items-center'>
        <AnimatedGradientText>
          <span
            className={cn(
              `inline text-4xl font-semibold animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent transition-colors duration-500 ${isSeniorVisible ? 'text-gray-700' : ''}`,
            )}
          >
            Junior
          </span>
        </AnimatedGradientText>

        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle} />
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <AnimatedGradientText>
          <span
            className={cn(
              `inline text-4xl font-semibold animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent transition-colors duration-500 ${isSeniorVisible ? '' : 'text-gray-700'}`,
            )}
          >
            Senior
          </span>
        </AnimatedGradientText>
      </div>
      <div className='flex-1 flex justify-center items-center '>
        <AnimatePresence mode='wait'>
          {selectedMember && (
            <motion.div
              key={selectedMember}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BackgroundGradient>
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-end px-4 pt-4">

                    <div className="flex flex-col items-center pb-10">
                      <img className="w-44 h-44 object-contain mb-3 aspect-auto border border-gray-500 rounded-full shadow-lg" src="/gdsc-f.png" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{selectedMember}</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      <div className="flex gap-4 mt-4 md:mt-6">
                        <span>fhsef</span>
                        <span>fhsef</span>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundGradient >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex gap-4 flex-row'>
          <ChevronLeft color='white' size={26} onClick={() => handleChevronClick(-1)} />
          <span className="text-xl font-semibold">{positions[selectedPositionIndex]}</span>
          <ChevronRight color='white' size={26} onClick={() => handleChevronClick(1)} />
        </div>
        <Dock>
          {teamData[selectedPositionIndex]?.map((item, index) => (
            <DockIcon key={index} item={item} setSelectedMember={setSelectedMember} className='p-2'>
              <img src="/gdsc-f.png" />
            </DockIcon>
          ))}
        </Dock>
      </div>
    </div>
  );
}
