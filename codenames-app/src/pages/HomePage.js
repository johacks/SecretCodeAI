import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function HomePage() {
  return (
    <div>
      <div>
        <TextField variant="filled" label="Name of the room" />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button variant="contained" color="primary">
          CREATE ROOM
        </Button>
      </div>
    </div>
  );
}

export default HomePage;