package upskill.utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupDrivers {
	
	public static WebDriver driver;							//initializing driver
	
	public static void setupDriver(){
//		System.setProperty("webdriver.chrome.driver", "C:\\UpSkillSoftware\\chromeDriver\\chromedriver.exe");
		WebDriverManager.chromedriver().setup();			//getting the chrome driver from cloud	
//		WebDriverManager.chromedriver().version("83.0.4103").setup();
		ChromeOptions options = new ChromeOptions();		//initializing chrome options
		options.addArguments("--start-maximized");			//add argument to maximize browser
		options.addArguments("--disable-notifications");	//add argument to diable notifications
//		options.addArguments("--headless");					//headless execution
		driver = new ChromeDriver(options);					
		//driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		driver.get("https://www.ebay.com/");				//loading the page
	}
	
	public static WebDriver getDriver(){
		return driver;										//return driver to call
	}
	
	public static void tearDownDriver(){
		driver.close();										//closing current driver
		driver.quit();										//closing all driver
	}
//	public WebDriver driver;
//
//	@BeforeMethod
//	public void initilize() {
//		System.out.println("Before Test is running");
//		System.setProperty("webdriver.chrome.driver",
//				"C:\\Users\\SKRAT\\eclipse-workspace\\SeleniumClassProject01\\src\\main\\resources\\driver\\chromedriver.exe");
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
//	}
//
//	@AfterMethod
//	public void tearDown() {
//		System.out.println("After Test is running");
//		driver.quit();
//	}

	
}
