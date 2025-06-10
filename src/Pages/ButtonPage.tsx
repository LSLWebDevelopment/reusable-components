import { Button } from "../components/Button";
import { FaExclamation } from "react-icons/fa";

export function ButtonPage() {
  return (
    <>
      <div className="flex gap-1 m-5">
        <div>
          <Button
            severity="primary"
            icon
            onClick={() => console.log("Clicked!")}
          >
            <FaExclamation />
            Primary
          </Button>
        </div>
        <div>
          <Button severity="primary">Test Button</Button>
        </div>
        <div>
          <Button
            severity="secondary"
            onMouseOut={() => console.log("Mouse Out!")}
          >
            Secondary
          </Button>
        </div>
        <div>
          <Button severity="success">Success</Button>
        </div>
        <div>
          <Button severity="warning">Warning</Button>
        </div>
        <div>
          <Button severity="danger">Danger</Button>
        </div>
      </div>

      <div className="flex gap-1 m-5">
        <div>
          <Button severity="primary" icon rounded outline>
            <FaExclamation />
            Primary
          </Button>
        </div>
        <div>
          <Button severity="secondary" outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button severity="success" outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button severity="warning" rounded outline>
            Warning
          </Button>
        </div>
        <div>
          <Button severity="danger" rounded outline>
            Danger
          </Button>
        </div>
        <div>
          <Button severity="primary">Click Me!</Button>
        </div>
        <div>
          <Button>Standard</Button>
        </div>
      </div>
    </>
  );
}
