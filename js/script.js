const name = $("#colleague-name");
const position = $("#colleague-position");
const department = $("#colleague-department");
const picture = $("#colleague-picture");

$(document).ready(function(){
    $("#legend-asia").hover(() => getCommonArea('path3294'));
    $("#legend-africa").hover(() => getCommonArea('path4220'));
    $("#legend-antarctica").hover(() => getCommonArea('path9670'));
    $("#legend-americas").hover(() => getCommonArea('path4304'));
    $("#legend-australia").hover(() => getCommonArea('path9672'));
    $("#legend-europe").hover(() => getCommonArea('path20178'));
    $("#legend-multi").hover(() => getCommonArea('path87852'));
    $("#legend-video").hover(() => getCommonArea('path4222'));
    $("#legend-facility").hover(() => getCommonArea('path4324'));
    $("#legend-storage").hover(() => getCommonArea('path4306'));

    colleagues.forEach(colleague => {
        if(colleague.id !== "none") {
            $("#personelListOptions").append(`<option value="${colleague.name}">`);
        }
    });
});

const removeHighlight = () => {
    $.find("path").forEach(elem => $(elem).removeClass("blink"));
    $.find("g").forEach(elem => $(elem).removeClass("blink"));
}

const resetColleagueDetails = () => {
    name.text("Name");
    position.text("Position");
    department.text("Department");
    picture.attr("src","./pics/placeholder.png");
}

const updateColleagueDetails = (updateName, updatePosition, updateDepartment, updatePicture) => {
    name.text(updateName);
    position.text(updatePosition);
    department.text(updateDepartment);
    picture.attr("src",updatePicture);
}

const highlight = (id) => {
    removeHighlight();
    if(id){$(`#${id}`).addClass("blink");}
}

const getCommonArea = (id) => {
    highlight(id);
    resetColleagueDetails();
}

const highlightColleague = (colleague) => {
    highlight(colleague.id);
    updateColleagueDetails(colleague.name, colleague.position, colleague.department, colleague.pictureUrl);
}

const findColleague = () => {
    const input = $("#personelList");
    const colleagueName = input.val();

    const colleague = colleagues.find((colleague) => colleague.name === colleagueName);
    if (colleague){
        highlightColleague(colleague);
    } else {
        highlight("");
        resetColleagueDetails();
    }

    input.val("");
}