package br.com.knowledge.platform.conf;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import br.com.knowledge.platform.business.AppBusiness;

public class AppConfiguration extends WebMvcConfigurerAdapter {
	@Autowired
	private AppBusiness appBusiness;
	
	@PostConstruct
	public void configureAppDataBase() {
		appBusiness.configureAppDataBase();
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}
}
