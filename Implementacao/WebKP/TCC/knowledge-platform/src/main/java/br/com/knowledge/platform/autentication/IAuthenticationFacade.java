package br.com.knowledge.platform.autentication;

import org.springframework.security.core.Authentication;

import br.com.knowledge.platform.modelo.Usuario;

public interface IAuthenticationFacade {
	Authentication getAuthentication();

	Usuario getUsuarioLogado();
}
