using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]

        public string Username { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 8, ErrorMessage = "Your password must be at least 8 characters")]
        public string Password { get; set; }
    }
}