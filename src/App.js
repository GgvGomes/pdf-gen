import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PDFViewer width="100%" height="100%" className="app" >
        <Invoice />
      </PDFViewer>
    </div>
  );
}

export default App;