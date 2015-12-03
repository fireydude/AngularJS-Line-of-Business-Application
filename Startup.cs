using Microsoft.AspNet.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace LineOfBusiness
{
    public class Startup
	{		
		public void Configure(IApplicationBuilder app)
		{
			app.UseStaticFiles();
		}
        // Entry point for the application.
        // public static void Main(string[] args) => Microsoft.AspNet.Hosting.WebApplication.Run<Startup>(args);
	}
}