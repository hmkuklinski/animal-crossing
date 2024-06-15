import Bug from "./Bug.js";

export default function BugList(props){
    //takes in the bugList info from Bugs.js and creates a Bug component for each bug in list!
    return(
        <div>
            <div className="all-bug-container">
                <div className="bug-list">
                    {props.bugInfo.map(function(bug) {
                    return <Bug name={bug.name} imgSrc={bug.imgSrc} />
                    })}
                </div>
            </div>
        </div>
    );
}