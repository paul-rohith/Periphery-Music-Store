import Table from '../../components/common/table';
import items from '../../data/vendors';

const Vendors = () => {
  return (
    <div>
      <h1>Current Vendors</h1>
      <Table items={items} />
    </div>
  );
};

export default Vendors;
