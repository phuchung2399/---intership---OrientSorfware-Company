using APIDEMO.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIDEMO.Controllers
{
    public class CityDto
    {
        [Required]
        public int id { get; set; }
        [MaxLength(10)]
        public string name { get; set; }
        public string url { get; set; }

        public int addmenu { get
            {
                return applySubMenus.Count;
            }
        }


        public ICollection<subMenu> applySubMenus { get; set; }
        = new List<subMenu>();

    }
}
