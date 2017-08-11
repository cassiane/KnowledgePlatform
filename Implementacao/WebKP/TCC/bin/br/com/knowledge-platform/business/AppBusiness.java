package br.com.knowl.platform.business;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.knowl.platform.dao.IProfissaoDao;
import br.com.knowl.platform.dao.IUsuarioDao;
import br.com.knowl.platform.modelo.Profissao;
import br.com.knowl.platform.modelo.Usuario;

@Service
public class AppBusiness implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8669326857228226801L;

	@Autowired
	private IUsuarioDao usuarioDao;
	@Autowired
	private IProfissaoDao profissaoDao;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public void configureAppDataBase() {
		createDefaultUser();
	}

	private void createDefaultUser() {
		Usuario user = usuarioDao.findByEmail("usuario@knowledgeplatform.com.br");

		if (user == null) {
			Profissao profissao = profissaoDao.findByDescricao("Desenvolvedor Java");
			if (profissao == null) {
				profissao = new Profissao("Desenvolvedor Java");
				profissaoDao.save(profissao);
			}
			user = createUser("cassiane", "santos", profissao, "123", "usuario@knowledgeplatform.com.br");
			usuarioDao.save(user);
		}
	}

	private Usuario createUser(String primeiroNome, String sobrenome, Profissao profissao, String senha, String email) {
		Usuario user = new Usuario(primeiroNome, sobrenome, profissao, bCryptPasswordEncoder.encode(senha), email);
		return user;
	}

}