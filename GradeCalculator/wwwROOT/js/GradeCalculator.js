var assignmentPct = 0.5676;
var quizzesPct = 0.086;
var groupProjectsPct = 0.0538;
var intexPct = 0.1075;
var examsPct = 0.2151;

$("#document").ready(function () {
    $("#btnSend").click(function () {
        var output = getOutput();
        $("#output").text(output);
    });
});

function getOutput() {
    var assignmentPoints = $("#assignments").val() * (assignmentPct);
    var quizzesPoints = $("#quizzes").val() * (quizzesPct);
    var groupProjectPoints = $("#groupprojects").val() * (groupProjectsPct);
    var intexPoints = $("#intex").val() * (intexPct);
    var examsPoints = $("#exams").val() * (examsPct);

    var totalPct = (assignmentPoints + quizzesPoints + groupProjectPoints + intexPoints + examsPoints);
    totalPct = totalPct;
    let letterGrade = "";

    switch (true) {
        case totalPct >= 94:
            letterGrade = "A";
            break;
        case totalPct >= 90:
            letterGrade = "A-";
            break;
        case totalPct >= 87:
            letterGrade = "B+";
            break;
        case totalPct >= 84:
            letterGrade = "B";
            break;
        case totalPct >= 80:
            letterGrade = "B-";
            break;
        case totalPct >= 77:
            letterGrade = "C+";
            break;
        case totalPct >= 74:
            letterGrade = "C";
            break;
        case totalPct >= 70:
            letterGrade = "C-";
            break;
        case totalPct >= 67:
            letterGrade = "D+";
            break;
        case totalPct >= 64:
            letterGrade = "D";
            break;
        case totalPct >= 60:
            letterGrade = "D-";
            break;
        case totalPct < 60:
            letterGrade = "F";
            break;
    }

    return("Final Percentage: " + totalPct +
        "\nFinal Grade: " + letterGrade);

}