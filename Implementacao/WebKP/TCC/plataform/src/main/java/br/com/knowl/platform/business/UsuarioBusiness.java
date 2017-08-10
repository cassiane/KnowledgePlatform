package br.com.knowl.platform.business;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.knowl.platform.dao.IUsuarioDao;
import br.com.knowl.platform.exception.BusinessException;
import br.com.knowl.platform.modelo.Usuario;

@Service
public class UsuarioBusiness implements IBusiness<Usuario> {
	/**
	 * 
	 */
	private static final long serialVersionUID = -1858304712013588777L;

	private static final Logger LOG = Logger.getLogger(UsuarioBusiness.class);

	@Autowired
	private IUsuarioDao dao;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public void salvar(Usuario usuario) throws BusinessException {
		if (usuario.getIdUsuario() != null) {
			// update
			LOG.info("Alterando usuário [" + usuario.getNomeCompleto() + "]");

			// encripta a senha
			usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));

			dao.save(usuario);
		} else {
			// insert
			LOG.info("Inserindo novo usuário [" + usuario.getNomeCompleto() + "]");

			Usuario usuarioExistente = buscarUsuario(usuario.getEmail());
			if (usuarioExistente != null) {
				LOG.error("Já existe um usuário com o email [" + usuario.getEmail() + "]");
				throw new BusinessException("Já existe um usuário com o login [" + usuario.getEmail() + "]");
			}

			// encripta a senha
			usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));

			dao.save(usuario);
		}

	}

	@Override
	public void excluir(Usuario model) throws BusinessException {
		LOG.info("Excluindo usuário: ["+model.getEmail()+"]");
		model = dao.findOne(model.getIdUsuario());
		dao.delete(model);
	}

	@Override
	public Usuario obterPorId(Usuario filtro) {
		return dao.findOne(filtro.getIdUsuario());
	}

	@Override
	public Iterable<Usuario> pesquisar(Usuario filtros) {
		return dao.findAll();
	}

	public Usuario buscarUsuario(String email) {
		return dao.findByEmail(email);
	}

}
