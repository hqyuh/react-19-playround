/* eslint-disable react/prop-types */
import { memo } from 'react';

const SlowList = memo(({ text }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }

  SlowList.displayName = 'SlowList';
  return (
    <ul className="w-full max-w-lg mx-auto bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200">
      {items}
    </ul>
  );
});

const SlowItem = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="px-4 py-3 hover:bg-gray-50 transition">
      <span className="text-gray-700 font-medium">Text:</span> {text}
    </li>
  );
};

export default SlowList;
