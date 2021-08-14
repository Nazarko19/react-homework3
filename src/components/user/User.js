export default function User({item,clickUser}) {
    const onclickuser = () => {
        clickUser(item)
      
    }
  return (
    <div>
        {item.id} - {item.name}
      <button onClick={onclickuser}>details</button>

    </div>
  );
}