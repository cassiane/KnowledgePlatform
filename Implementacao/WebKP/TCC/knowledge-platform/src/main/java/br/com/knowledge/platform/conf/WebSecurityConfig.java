package br.com.knowledge.platform.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;

//	@Autowired
//	private DataSource dataSource;

//	@Value("${spring.queries.users-query}")
//	private String usersQuery;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// primeiro fazer bloqueios depois libera geral
		http.authorizeRequests().antMatchers("/admin/**").hasRole("USER").and().formLogin();
		// .antMatchers("/restrito/**")
		// .hasAnyRole(RoleUserDomain.USER.name(), RoleUserDomain.ADMIN.name(),
		// RoleUserDomain.VIP.name())
		// .antMatchers("/publico/**").permitAll().anyRequest().authenticated().and()
		// .formLogin().loginPage("/publico/login").failureUrl("/publico/login?error=true").permitAll()
		// .defaultSuccessUrl("/login-sucess",
		// true).usernameParameter("email").passwordParameter("password")
		// .and().logout().logoutRequestMatcher(new
		// AntPathRequestMatcher("/logout")).logoutSuccessUrl("/")
		// .and().exceptionHandling().accessDeniedPage("/accesso-negado");
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");
		// auth.jdbcAuthentication().usersByUsernameQuery(usersQuery).authoritiesByUsernameQuery(rolesQuery)
		// .dataSource(dataSource).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
	}

}
