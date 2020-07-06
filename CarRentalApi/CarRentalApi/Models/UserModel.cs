using System;
using System.ComponentModel.DataAnnotations;

namespace CarRentalApi.Models
{
    public class UserModel
    {
        [Required(ErrorMessage = "User Id is required")]
        [StringLength(20, ErrorMessage = "User Id Maximum length is 20 characters. ")]
        public string UserId { get; set; }

        [Required(ErrorMessage = "First Name is required")]
        [StringLength(30, ErrorMessage = "First Name Maximum length is 30 characters. ")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        [StringLength(30, ErrorMessage = "Last Name Maximum length is 30 characters. ")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "User Name is required")]
        [StringLength(30, ErrorMessage = "User Name Maximum length is 30 characters. ")]
        public string UserName { get; set; }

        [Display(Name = "Email address")]
        [Required(ErrorMessage = "email address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(64, ErrorMessage = "Password Maximum length is 64 characters. ")]
        public string HashPassword { get; set; }

        public string Gender { get; set; }

        public DateTime? DayOfBirth { get; set; }

        public string Title { get; set; }
    }
}