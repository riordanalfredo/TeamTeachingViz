import { useTimeline } from "../observation/visualisationComponents/TimelineContext";
import { TimeSliderController } from "../observation/visualisationComponents/TimelineVisualisation";
import { HiveView } from "../visualisations/hive";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTracking } from "react-tracking";
import { CoTeachVizView } from "../visualisations/coTeachViz";
import { ArrowLeft } from "react-bootstrap-icons";

const ClassroomAnalyticsHive = () => {
  const { range } = useTimeline();
  const { Track, trackEvent } = useTracking({ page: "Classroom Analytics" });

  const PROJECT_CODE = "classroomAnalytics2024"; // peninsulaNursing
  let location = useLocation();
  const { simulationId } = useParams();

  const navigate = useNavigate();
  const simulationDec = location.state.name;

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    visualisationsContainer: {
      marginTop: "1em",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "start",
    },
    backButton: {
      position: "absolute",
      alignSelf: "flex-start",
    },
  };

  return (
    <Track>
      <div style={styles.container}>
        <div style={styles.backButton}>
          <ArrowLeft
            style={{ cursor: "pointer" }}
            onClick={() => {
              trackEvent({
                action: "click",
                element: "returnToMainPage",
              });
              navigate("/main");
            }}
            size={"30px"}
          />
        </div>
        <h3>
          {simulationId}: {simulationDec}
        </h3>
        <div style={{ width: "75vw", marginBottom: "1em", marginTop: "1em" }}>
          <TimeSliderController trackEvent={trackEvent} />
        </div>
        <div style={styles.visualisationsContainer}>
          <HiveView
            timeRange={range}
            projectCode={PROJECT_CODE}
            height="30em" // default height
            width="40vw"
            showFilter={false}
          />
          <CoTeachVizView />
        </div>
      </div>
    </Track>
  );
};

export default ClassroomAnalyticsHive;
