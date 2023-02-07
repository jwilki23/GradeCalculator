using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace GradeCalculator.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range (0,100,ErrorMessage ="Please enter an integer between 0 and 100.")]
        public int assignments{get; set;}
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter an integer between 0 and 100.")]
        public int quizzes { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter an integer between 0 and 100.")]
        public int groupprojects { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter an integer between 0 and 100.")]
        public int intex { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter an integer between 0 and 100.")]
        public int exams { get; set; }
    }
}
