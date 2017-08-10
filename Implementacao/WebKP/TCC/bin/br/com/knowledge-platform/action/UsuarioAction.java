package br.com.knowl.platform.action;

import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.knowl.platform.business.UsuarioBusiness;
import br.com.knowl.platform.exception.BusinessException;
import br.com.knowl.platform.modelo.Usuario;

@Controller
@RequestMapping(value="/usuario/")
public class UsuarioAction {
	
	private static final Logger LOG = Logger.getLogger(UsuarioAction.class);
	@Autowired
	private UsuarioBusiness business;
	private static final String USER_PATH = "/usuario";
	
	@GetMapping
	public String novo(Model model) {
		LOG.info("Criando um novo usuário");
		model.addAttribute(new Usuario());
		model.addAttribute("destinoSalvar", "redirect:/usuario/sucesso");
		return USER_PATH;
	}
	
	@PostMapping
	public String salvar(@Valid Usuario usuario, BindingResult bindingResult, String confirmaSenha, String destinoSalvar, Model model, RedirectAttributes redirectAttrs) {

		LOG.info("Salvando um usuário");
		
		if(!StringUtils.equals(usuario.getSenha(), confirmaSenha)){
			LOG.error("Senhas diferentes");
			bindingResult.reject("confirmaSenha", "Senha e Confirma Senha devem ser iguais");
			return USER_PATH;
		}
		
		if(bindingResult.hasErrors()) {
			return USER_PATH;
		}
		
		model.addAttribute(usuario);
		
		try {
			business.salvar(usuario);
		} catch (BusinessException e) {
			ObjectError error = new ObjectError("usuario", e.getMessage());
			bindingResult.addError(error );
			return USER_PATH;
		}
		
		redirectAttrs.addFlashAttribute("usuario", usuario);
		return destinoSalvar;
	}
	
	@RequestMapping(value="sucesso")
	public String sucesso(Model model) {
		if(!model.containsAttribute("usuario")) {
			model.addAttribute(new Usuario());
		}
		
		return "/usuarioSucesso";
	}

}
