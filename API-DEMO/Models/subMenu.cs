using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIDEMO.Models
{
    public class subMenu
    {
        [Required]
        [MaxLength(5)]
        public int id { get; set; }

        [MaxLength(10)]
        public string name { get; set; }

        [MaxLength(20)]
        public string url { get; set; }

    }
}
