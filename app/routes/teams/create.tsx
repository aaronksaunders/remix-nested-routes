import { Link } from "remix";

export default function CreateTeam() {
  return (
    <div style={{ padding: 16 }}>
      <p>Add New Team</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Description: <textarea name="description" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
          <Link to="/teams">
            <button type="button" className="button">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
