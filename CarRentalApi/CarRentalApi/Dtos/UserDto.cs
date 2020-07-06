using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarRentalApi.Dtos
{
    public class UserDto
    {
        [Required(ErrorMessage = "User Id is required")]
        [StringLength(20, ErrorMessage = "User Id Maximum length is 20 characters. ")]
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Gender { get; set; }
        public DateTime? DayOfBirth { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
    }
}