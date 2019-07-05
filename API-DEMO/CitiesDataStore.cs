using APIDEMO.Controllers;
using APIDEMO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIDEMO
{
    public class CitiesDataStore
    {
        public static CitiesDataStore Current { get; } = new CitiesDataStore();

        public List<CityDto> Cities { get; set; }

        public CitiesDataStore()
        {
            Cities = new List<CityDto>()
            {
                new CityDto()
                {
                    id = 1,
                    name = "menu",
                    url = "/",
                    applySubMenus = new List<subMenu>()
                    {
                        new subMenu()
                        {
                              id = 1,
                             name = "menu",
                             url = "/"
                        }
                    }
                },
                new CityDto()
                {
                    id = 2,
                    name = "menu2",
                    url = "/",
                     applySubMenus = new List<subMenu>()
                    {
                        new subMenu()
                        {
                              id = 2,
                             name = "menu3",
                             url = "/"
                        }
                    }
                },
                new CityDto()
                {
                    id = 3,
                    name = "menu4",
                    url = "/",
                     applySubMenus = new List<subMenu>()
                    {
                        new subMenu()
                        {
                              id = 3,
                             name = "menu",
                             url = "/"
                        }
                    }
                },
                  new CityDto()
                {
                    id = 4,
                    name = "menu",
                    url = "/",
                     applySubMenus = new List<subMenu>()
                    {
                        new subMenu()
                        {
                              id = 4,
                             name = "menu5",
                             url = "/"
                        }
                    }
                }
            };
        }
    }
}
