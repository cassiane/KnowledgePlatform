package br.com.knowledge.platform.autentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import br.com.knowledge.platform.business.UsuarioBusiness;
import br.com.knowledge.platform.modelo.Usuario;

public class AuthenticationFacade implements IAuthenticationFacade{
	
	@Autowired
	private UsuarioBusiness usuarioBusiness; 
	
	@Override
	public Authentication getAuthentication() {
		return SecurityContextHolder.getContext().getAuthentication();
	}

	@Override
	public Usuario getUsuarioLogado() {
		Authentication authentication = getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			return usuarioBusiness.buscarUsuario(authentication.getName());
		}
		return null;
	}

}
