using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace API_DEMO
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                  .AddMvcOptions(o => o.OutputFormatters.Add(
                      new XmlDataContractSerializerOutputFormatter()));
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                  builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });
            /*     .AddJsonOptions( o => {
                     if(o.SerializerSettings.ContractResolver != null)
                     {
                         var castResolver = o.SerializerSettings.ContractResolver
                         as DefaultContractResolver;
                         castResolver.NamingStrategy = null;
                     }
             });*/
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler();
            }
            app.UseStatusCodePages();
            app.UseCors("CorsPolicy");
            app.UseMvc();

 
           /* app.Run(async (Content) =>
            {
               //
            });*/
        }

    }
}
