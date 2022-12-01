import { useDispatch, useSelector } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filters-selectors';
import { setFilter } from '../store/filters/filers-action';

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
      >
        all
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        active
      </button>
      <button
        onClick={() => dispatch(setFilter('complated'))}
        style={{ color: activeFilter === 'complated' ? 'red' : 'black' }}
      >
        complated
      </button>
    </div>
  );
};

export default Filters;
